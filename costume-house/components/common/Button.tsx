import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    onClick,
    type,
    isActive,
    size,
    className

}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" ;
  const variantStyle = variant === "default" ? "bg-[#FFFFFF] text-[#FAFAFA] hover:bg-[#6633B9]/90" : variant === 'destructive' ? "bg-[#E54848] text-[#FAFAFA] hover:bg-[#E54848]/90" : variant === 'ouline' ? "border border-[#E6E6EB] bg-[#FFFFFF] hover:bg-[#F2D55C] hover:text-[#OAOAOB]" :  variant === 'secondary' ?  "bg-[#F26646] text-[#FFFFFF] hover:bg-[#F26646]/80" : variant === 'ghost' ? "hover:bg-[#f2D55C] hover:[#OAOAOB]" : variant === 'link' ?  "text-[#6633B9] underline-offset-4 hover:underline" : "bg-[#6633B9] text-[#FAFAFA] hover:bg-[#6633B9]/90" ;
  const sizeStyle = size === 'sm' ? "h-9 rounded-md px-3" : size === "lg" ? "h-11 rounded-md px-8" : size === "icon" ? "h-10 w-10" : "h-10 px-4 py-2" ;
  const activeStyles = isActive ? "border-2 border-blue-600 ring-2 ring-blue-400" : "";
 return (
    <button 
     onClick={onClick}
     type={type}
     className={`${baseStyle} ${variantStyle} ${activeStyles} ${sizeStyle} ${className}`}
    >
     {children}
    </button>
 )
}

export default Button;