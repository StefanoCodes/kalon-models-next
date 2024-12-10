import { Content } from "../../register.config";

export default function ContentList({ content }: { content: Content[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {content.map((item) => (
        <li
          key={item.title}
          className="border-borderColor flex flex-row items-center justify-between border-b pb-4"
        >
          <p className="body-text font-normal">{item.title}</p>
          <p className="text-sm font-normal text-mutedColor sm:text-base">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
