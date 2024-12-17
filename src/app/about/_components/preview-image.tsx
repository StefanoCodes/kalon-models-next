const headerAnimationStyle = `text-3xl font-medium leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;
const headerAnimationStyleSoft = `text-3xl font-normal leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;

export default function PreviewImage() {
  return (
    <div className="relative">
      <div className="relative h-[500px] w-full">
        <div className="h-full w-full bg-[#B2B3C9]"></div>
        {/* <Image
            src="/kalon-cover-home.jpg"
            alt="About Hero"
            fill
            className="mx-auto max-w-[1920px] bg-gray-500 object-cover brightness-0"
            priority
          /> */}
      </div>
      <h1 className="absolute left-1/2 top-1/2 flex min-w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className={headerAnimationStyle}>
          <span className={headerAnimationStyleSoft}>In the</span> academy
          today,
        </span>

        <span className={headerAnimationStyle}>
          <span className={headerAnimationStyleSoft}>on the</span> runway
          tomorrow,
        </span>
      </h1>
    </div>
  );
}
