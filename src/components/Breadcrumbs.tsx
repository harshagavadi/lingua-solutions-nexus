import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.linguasolutionsindia.com/"
              },
              ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                ...(item.href && !item.isActive ? { "item": `https://www.linguasolutionsindia.com${item.href}` } : {})
              }))
            ]
          })
        }}
      />
      <div className="bg-gray-50/80 backdrop-blur-sm py-2 sm:py-4 border-b border-gray-200/60">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap">
              <BreadcrumbItem>
                <BreadcrumbLink 
                  href="/" 
                  className="flex items-center gap-1 text-xs sm:text-sm hover:text-blue-600 transition-colors"
                >
                  <Home className="h-3 w-3 sm:h-4 sm:w-4" />
                  {!isMobile && <span>Home</span>}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {items.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbSeparator className="text-gray-400" />
                  <BreadcrumbItem>
                    {item.isActive ? (
                      <BreadcrumbPage 
                        className="text-xs sm:text-sm font-medium text-blue-600 max-w-[150px] sm:max-w-none truncate"
                      >
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink 
                        href={item.href} 
                        className="text-xs sm:text-sm hover:text-blue-600 transition-colors max-w-[150px] sm:max-w-none truncate"
                      >
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
