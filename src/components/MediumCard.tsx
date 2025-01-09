import Image from 'next/image';

interface MediumCardProps {
    title: string;
    layout?: string;
    titleColor: string;
    cardColor: string;
    subtitleColor: string;
    textColor: string;
    content: Array<{ subtitle?: string, text: string, text2?: string, text3?: string, text4?: string, comingSoon?: string, url?: string, urlText?: string }>;
    image?: string;
}

export default function MediumCard({ title, titleColor, cardColor, subtitleColor, textColor, content, image, layout }: MediumCardProps) {
    return (
        <div className={`w-[calc(100%-2rem)] lg:w-[calc(100%-10rem)] rounded-3xl mx-4 lg:mx-20 flex flex-col-reverse md:flex-row gap-10 lg:gap-16 ${cardColor} p-10 md:p-12 lg:p-16 mb-5 items-center`}>
            <div className={`w-full ${layout === 'grid' ? 'flex flex-col' : 'lg:w-1/2'}`}>
                <h3 className={`${titleColor} text-xl font-bold`}>{title}</h3>
                <div className={`${layout === 'grid' ? 'flex flex-wrap gap-x-8' : ''}`}>
                    {content.map((item, index) => (
                        <div key={index} className={`mb-10 ${layout === 'grid' && index > 0 ? 'w-[calc(50%-1rem)]' : 'w-full'}`}>
                            {item.subtitle && <h4 className={`${subtitleColor} text-md font-semibold mt-4`}>{item.subtitle}</h4>}
                            <p className={`${textColor} text-sm mt-2`}>{item.text}</p>
                            {item.text2 && <p className={`${textColor} text-sm mt-4`}>{item.text2}</p>}
                            {item.text3 && <p className={`${textColor} text-sm mt-4`}>{item.text3}</p>}
                            {item.text4 && <p className={`${textColor} text-sm mt-4`}>{item.text4}</p>}
                            {item.comingSoon && <p className={`${textColor} text-sm mt-4 italic font-light`}>{item.comingSoon}</p>}
                            {item.url && <div className='mt-4'><a href={item.url} target="_blank" className={`${textColor} font-bold text-sm underline`}>{item.urlText}</a></div>}
                        </div>
                    ))}
                </div>
            </div>
            {image && <div className="w-full lg:w-1/2 xl:p-4">
                <Image src={image} alt={title} width={500} height={500} className="w-full" />
            </div>}
        </div>
    )
}