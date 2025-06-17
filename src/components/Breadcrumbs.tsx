
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
    <div className="bg-gray-50/80 backdrop-blur-sm py-2 sm:py-4 border-b border-gray-200/60">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
            <BreadcrumbItem itemScope itemType="https://schema.org/ListItem">
              <BreadcrumbLink 
                href="/" 
                className="flex items-center gap-1 text-xs sm:text-sm hover:text-blue-600 transition-colors"
                itemProp="item"
              >
                <Home className="h-3 w-3 sm:h-4 sm:w-4" />
                {!isMobile && <span itemProp="name">Home</span>}
                <meta itemProp="position" content="1" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbSeparator className="text-gray-400" />
                <BreadcrumbItem itemScope itemType="https://schema.org/ListItem">
                  {item.isActive ? (
                    <BreadcrumbPage 
                      className="text-xs sm:text-sm font-medium text-blue-600 max-w-[150px] sm:max-w-none truncate"
                      itemProp="name"
                    >
                      {item.label}
                      <meta itemProp="position" content={String(index + 2)} />
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      href={item.href} 
                      className="text-xs sm:text-sm hover:text-blue-600 transition-colors max-w-[150px] sm:max-w-none truncate"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.label}</span>
                      <meta itemProp="position" content={String(index + 2)} />
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
