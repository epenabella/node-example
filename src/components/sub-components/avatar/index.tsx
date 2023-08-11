type Props = {
  path: string;
  desc?: string;
};

const Avatar = ({ path, desc }: Props) => (
  <img
    className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 
ring-white dark:ring-gray-800"
    src={path}
    alt={desc}
  />
);

export default Avatar;
