import Image from "next/image";

export default function GreenDiv() {
  return (
    <div className="w-full max-w-[1440px] mx-auto rounded-[5px] relative bg-[#23856D] mt-10 border">
      <div className="w-full h-auto flex flex-col items-center py-10">
        <div className="flex items-center gap-[80px]">
          {/* Left Content */}
          <div className="w-[509px] flex flex-col gap-[30px]">
            <h4 className="font-Montserrat text-[20px] leading-[30px] text-white">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
              We know how large objects will act. We know how objects will act. We know.
            </p>
            <div className="flex items-center gap-[34px]">
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </h3>
              <button className="rounded-[5px] bg-[#2DC071] py-[15px] px-[40px] flex items-center">
                <span className="font-Montserrat text-[14px] leading-[22px] text-white">
                  ADD TO CART
                </span>
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-[510px]">
            <Image src="/shop-hero.png" alt="Green Hero" width={510} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
