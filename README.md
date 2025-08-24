# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ff3b9f75-9253-4497-9f1a-c23c59a44f99

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ff3b9f75-9253-4497-9f1a-c23c59a44f99) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ff3b9f75-9253-4497-9f1a-c23c59a44f99) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Generating 25 Markdown Articles with Python

This project now includes a Python helper script (`generate_articles.py`) that will automatically create **25** Markdown articles (each over 1,000 words) complete with a unique Unsplash image.

### 1. Install Python dependencies

```bash
# from project root
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Export the required API keys

```bash
export OPENAI_API_KEY="<your-openai-key>"
export UNSPLASH_ACCESS_KEY="<your-unsplash-access-key>"
```

### 3. Run the generator

```bash
python generate_articles.py
```

The script will output Markdown files to `generated_articles/` and embed Unsplash image URLs. Feel free to modify the `ARTICLE_TITLES` list inside the script to customize topics or change the number of articles.
