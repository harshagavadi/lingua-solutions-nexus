import os
import requests
import textwrap
import time
from pathlib import Path

import openai

# -------------------------------
# Configuration
# -------------------------------
# Set your API keys via environment variables for security.
#   export OPENAI_API_KEY="..."
#   export UNSPLASH_ACCESS_KEY="..."
#
# The script will create output in ./generated_articles and ./generated_articles/images
NUM_ARTICLES = 25
OUTPUT_DIR = Path(__file__).parent / "generated_articles"
IMAGES_DIR = OUTPUT_DIR / "images"
MODEL_NAME = os.getenv("OPENAI_MODEL", "gpt-3.5-turbo")

openai.api_key = os.getenv("OPENAI_API_KEY")
UNSPLASH_ACCESS_KEY = os.getenv("UNSPLASH_ACCESS_KEY")

if not openai.api_key:
    raise EnvironmentError("OPENAI_API_KEY environment variable is not set.")
if not UNSPLASH_ACCESS_KEY:
    raise EnvironmentError("UNSPLASH_ACCESS_KEY environment variable is not set.")

# -------------------------------
# Article topics - feel free to customize
# -------------------------------
ARTICLE_TITLES = [
    "The Future of Artificial Intelligence in Daily Life",
    "Sustainable Energy Innovations for the Next Decade",
    "The Rise of Remote Work: Benefits and Challenges",
    "Blockchain Beyond Cryptocurrency: Real-World Applications",
    "Mental Health in the Digital Age: Coping with Information Overload",
    "Climate Change and Coastal Cities: Adapting to Rising Seas",
    "Space Tourism: Preparing for the Commercial Spaceflight Era",
    "The Evolution of E-commerce Post-Pandemic",
    "Gene Editing Ethics: Navigating CRISPR Technology",
    "Cybersecurity Threats in 2025 and How to Prepare",
    "Smart Cities: Integrating IoT for Urban Efficiency",
    "The Psychology of Social Media Influence",
    "Renewable Agriculture: Vertical Farming and Hydroponics",
    "Quantum Computing Explained for Non-Scientists",
    "Digital Nomad Lifestyle: A Comprehensive Guide",
    "Augmented Reality in Education: Transforming Learning Experiences",
    "The Global Water Crisis: Innovative Solutions for Conservation",
    "Esports Growth and Its Impact on Traditional Sports",
    "Bioplastics: Can They Solve the Plastic Problem?",
    "The Art and Science of Mindfulness Meditation",
    "5G Technology: Opportunities and Myths Debunked",
    "Electric Vehicles Infrastructure: Building the Future Grid",
    "Ethical AI: Governing Algorithms for Fair Outcomes",
    "The Creative Economy: Monetizing Passion in the Digital Era",
    "Health Tech Wearables: From Fitness Trackers to Medical Devices",
][:NUM_ARTICLES]

# Ensure output directories exist
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def generate_article_content(title: str) -> str:
    """Generate a 1000+ word article in Markdown format using OpenAI."""
    prompt = (
        f"Write a detailed, well-researched article of at least 1,100 words on the topic: '{title}'. "
        "Use a friendly yet informative tone. Organize the article with an engaging introduction, "
        "multiple subheadings, bullet points or numbered lists where appropriate, and a concise conclusion. "
        "Return the article in Markdown format without enclosing backticks."
    )

    response = openai.ChatCompletion.create(
        model=MODEL_NAME,
        messages=[{"role": "user", "content": prompt}],
        temperature=0.9,
        max_tokens=2048,
    )
    return response.choices[0].message.content.strip()


def fetch_unsplash_image(title: str) -> str:
    """Fetch a random Unsplash image URL based on the given title keywords."""
    query = title.split(":")[0].split("-")[0].strip().split()[0:3]  # first 3 words for relevance
    query = "+".join(query)
    url = "https://api.unsplash.com/photos/random"
    params = {
        "query": query,
        "orientation": "landscape",
        "client_id": UNSPLASH_ACCESS_KEY,
    }
    resp = requests.get(url, params=params, timeout=15)
    resp.raise_for_status()
    data = resp.json()
    return data["urls"]["regular"]


def save_markdown(title: str, content_md: str, image_url: str, index: int):
    """Save the article with front matter and embedded image."""
    slug = f"article-{index:02d}"
    filename = OUTPUT_DIR / f"{slug}.md"

    md = textwrap.dedent(
        f"""---
        title: "{title}"
        image: "{image_url}"
        slug: "{slug}"
        ---

        ![{title}]({image_url})

        {content_md}
        """
    )
    filename.write_text(md, encoding="utf-8")
    print(f"Saved {filename}")


if __name__ == "__main__":
    for i, title in enumerate(ARTICLE_TITLES, start=1):
        print(f"\nGenerating article {i}/{NUM_ARTICLES}: {title}")
        content = generate_article_content(title)
        try:
            image_url = fetch_unsplash_image(title)
        except Exception as e:
            print(f"Failed to fetch Unsplash image for '{title}': {e}. Using placeholder.")
            image_url = "https://via.placeholder.com/1200x800?text=Image+Unavailable"
        save_markdown(title, content, image_url, i)
        # Respect rate limits
        time.sleep(1)

    print("\nAll articles generated in", OUTPUT_DIR)