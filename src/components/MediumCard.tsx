import Image from 'next/image';

interface MediumCardProps {
    title: string;
    titleColor: string;
    cardColor: string;
    subtitleColor: string;
    textColor: string;
    content: Array<{ subtitle: string, text: string }>;
    buttonText: string;
    buttonURL: string;
    buttonIcon: React.ReactNode;
    buttonBorderColor: string;
    image: string;
}

export default function MediumCard({ title, titleColor, cardColor, subtitleColor, textColor, content, buttonText, buttonURL, buttonIcon, buttonBorderColor, image }: MediumCardProps) {
    return (
        <div className={`w-[calc(100%-10rem)] h-full rounded-3xl mx-20 flex flex-row gap-28 ${cardColor} px-24 py-16 mb-5`}>
            <div className="w-1/2">
                <h3 className={`${titleColor} text-xl font-bold pb-5`}>{title}</h3>
                {content.map((item, index) => (
                    <div key={index} className="pb-5">
                        <h4 className={`${subtitleColor} text-md font-semibold pb-2`}>{item.subtitle}</h4>
                        <p className={`${textColor} text-sm`}>{item.text}</p>
                    </div>
                ))}
                <button
                    onClick={() => window.open(buttonURL, '_blank')}
                    className={`${titleColor} bg-transparent font-semibold flex border ${buttonBorderColor} rounded-md mt-3 py-2 px-10 items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95`}
                >
                    {buttonIcon}
                    {buttonText}
                </button>
            </div>
            <div className="w-1/2 relative">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
        </div>
    )
}