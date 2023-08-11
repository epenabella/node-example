import { ReactNode } from "react";

type Props = {
  title: string;
  text: string;
  imgPath?: string;
  readMoreLink?: string;
     children?: ReactNode;
};
//
export const IconBlock = ({ ...props }: Props) => (
  <a
    className={`group flex flex-col justify-center rounded-xl p-4 md:p-7 ${
      props.readMoreLink
        ? "dark:hover:bg-slate-800 hover:bg-gray-50 "
        : "group-hover:!cursor-default !cursor-default"
    }`}
    href={props.readMoreLink ?? "#"}
    onClick={(e) =>  !props.readMoreLink && e.preventDefault() }
  >
    <div className="grid place-items-center w-16 h-16 bg-volvo-blue dark:bg-volvo-blue-light rounded-xl">
      {props.imgPath && <img
        className="inline-block h-[2.875rem] w-[2.875rem] rounded-md"
        src={props.imgPath}
        alt={props.title}
      />}
      {
          !props.imgPath && props.children
      }
    </div>
    <div className="mt-5">
      <h3
        className={`${
          props.readMoreLink
            ? "group-hover:text-gray-600 dark:group-hover:text-gray-400"
            : ""
        }  text-lg font-semibold text-gray-800 dark:text-white `}
      >
        {props.title}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-gray-400">
        {props.text}
      </p>
        <span
          onClick={() => window.open(props.readMoreLink, "_blank")}
          className={`${!props.readMoreLink ? 'w-0 overflow-hidden' : ''} mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium`}
        >
          Learn more
          <svg
            className="w-2.5 h-2.5"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </span>
    </div>
  </a>
);
