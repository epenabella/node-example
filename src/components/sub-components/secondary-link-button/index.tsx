import { Link } from "react-router-dom";

type Props = {
     text: string;
     onClick?: string;
     href?: string;
     to?: string;
     icon?: React.ReactNode;
   };

export const SecondaryLinkButton = ({...props}:Props) => {
     const className = "inline-flex justify-center items-center gap-x-3 text-sm lg:text-base text-center border hover:cursor-pointer hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition px-4 py-2 sm:py-3 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800";
     const children = <>
       {props.text}
       {props.icon}
     </>

     return props.to 
          ? <Link className={className} to={props.to}>{children}</Link> 
               : <a className={className} href={props.href} target='_blank'>{children}</a>

}

//  className="inline-flex justify-center items-center gap-x-3 text-center bg-volvo-blue-light hover:bg-volvo-blue border border-transparent text-xs sm:text-sm  lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue-light focus:ring-offset-2 focus:ring-offset-white transition px-4 py-2 sm:py-3  dark:focus:ring-offset-gray-800"
