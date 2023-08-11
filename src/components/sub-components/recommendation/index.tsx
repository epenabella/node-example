type Props = {
     imgPath: string;
     name: string;
     title: string;
     recommendation: string;
   };

const Recommendation = ({...props}: Props) => {
     return         <div className="flex h-auto">
     <div className="flex flex-col bg-white rounded-xl dark:bg-volvo-blue">
       <div className="flex-auto p-4 md:p-6">
         <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
           &nbsp;{props.recommendation}&nbsp;
         </p>
       </div>
       <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-volvo-blue-light">
         <div className="flex items-center">
           <div className="flex-shrink-0">
             <img
               className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
               src={props.imgPath}
               alt={props.name}
             />
           </div>
           <div className="grow ml-3">
             <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
               {props.name}
             </p>
             <p className="text-xs text-gray-500 dark:text-gray-400">
               {props.title}
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
}

export default Recommendation;