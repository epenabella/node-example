import { Link } from "react-router-dom";

type Props = {
     text: string;
     onClick?: string;
     href?: string;
     icon?: React.ReactNode;
     to?: string;
     openInSameTab?: boolean;
   };

export const PrimaryLinkButton = ({...props}:Props) => {
     const className = "inline-flex justify-center items-center gap-x-3 text-center bg-volvo-blue-light hover:bg-volvo-blue hover:cursor-pointer border border-transparent text-xs sm:text-sm  lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue-light focus:ring-offset-2 focus:ring-offset-white transition px-4 py-2 sm:py-3  dark:focus:ring-offset-gray-800";

     const children = <>
       {props.text}
       {props.icon}
     </>

     return props.to 
          ? <Link className={className} to={props.to}>{children}</Link> 
               : <a className={className} href={props.href} target={props.openInSameTab ? '_self' : '_blank'}>{children}</a>
}
