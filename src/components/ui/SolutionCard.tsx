
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio"; // Import AspectRatio
import { Button } from "@/components/ui/button"; // Import Button
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  to: string;
  className?: string;
  index?: number;
}

const SolutionCard = ({ 
  title, 
  description, 
  imageUrl, // Change icon to imageUrl
  to, 
  className,
  index = 0 
}: SolutionCardProps) => {
  const animationDelay = `${index * 0.1}s`;

  return (
    <div // Changed from Link to div
      className={cn(
        "block group card-hover rounded-lg overflow-hidden h-full flex flex-col shadow-md",
        title.includes("Business Idea") ? "bg-aurentia-card text-white" : "bg-white text-aurentia-text border border-gray-200",
        className
      )}
      style={{ animationDelay }}
    >
      <AspectRatio ratio={1 / 1}> {/* Add AspectRatio for the image */}
        <img 
          src={imageUrl} 
          alt={`Placeholder image for ${title}`} 
          className="object-cover w-full h-full"
        />
      </AspectRatio>
      <div className="p-6 flex flex-col h-full"> {/* Adjusted padding and added flex-col h-full */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3> {/* Adjusted margin */}
        
        {/* Accordion for Description */}
        <Accordion type="single" collapsible className="w-full mb-4"> {/* Added mb-4 for spacing before button */}
          <AccordionItem value={`item-${index}`}> {/* Unique value for each item */}
            <AccordionTrigger 
              className={cn(
                "text-sm font-medium py-2", // Adjusted padding
                title.includes("Business Idea") ? "text-gray-200 hover:text-gray-100" : "text-gray-600 hover:text-gray-700" // Custom colors
              )}
              // Removed onClick stopPropagation as parent is no longer a Link
            >
              Détails
            </AccordionTrigger>
            <AccordionContent>
              <p className={cn(
                "text-sm", // Removed mb-4 and flex-grow
                title.includes("Business Idea") ? "text-gray-300" : "text-gray-700" // Custom colors
              )}>
                {description}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Button */}
        <Button 
          asChild // Render as a child of the Link
          variant="default" // Use default variant for a solid button
          className={cn(
            "w-full mt-auto text-base", // Make button full width and push to bottom
            title.includes("Business Idea") ? "bg-white text-aurentia-card hover:bg-gray-200" : "bg-aurentia-card text-white hover:bg-aurentia-card/90" // Custom colors based on card type
          )}
        >
          <Link to={to} className="flex items-center justify-center gap-2"> {/* Link inside button for navigation */}
            <span>En savoir +</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Button>
      </div>
    </div> // Changed from Link to div
  );
};

export default SolutionCard;
