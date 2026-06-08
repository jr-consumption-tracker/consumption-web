import { Logo } from "@web/shared/ui/Logo";

type Props = {
  header: string;
  description: string;
};

const LayoutLoginInfoDetail = ({ header, description }: Props) => {
  return (
    <div className="relative flex flex-col w-full h-full z-10">
      <div className="flex w-full">
        <div className="w-full mx-5 md:mx-12">
          <div className="my-12 lg:mb-0">
            <Logo size="lg" showText={true} variant="dark" />
          </div>
        </div>
      </div>
      <div className="z-0 flex items-center h-full">
        <div className="mx-5 md:mx-12">
          <div className="mb-12">
            <h1 className="mb-6 text-white">{header}</h1>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLoginInfoDetail;
