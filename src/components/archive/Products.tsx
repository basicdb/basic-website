import MediumCard from '@/components/archive/MediumCard';
import moreBenefits from '@/utils/moreBenefits';
import Benefits from '@/components/archive/Benefits';
import { MarqueeDemo } from '@/components/archive/Marquee';

type MediumCardProps = {
    title: string;
    layout?: 'grid';
    titleColor: string;
    cardColor: string;
    subtitleColor: string;
    textColor: string;
    content: Array<{
        subtitle?: string;
        text: string;
        text2?: string;
        text3?: string;
        text4?: string;
        url?: string;
        urlText?: string;
        urlStyle?: string;
        comingSoon?: string;
    }>;
    image?: string;
    video?: string;
    imageComponent?: React.ReactNode;
};

export default function Products() {
    const mediumCardElements: MediumCardProps[] = [
        {
            title: 'user-owned data stores',
            titleColor: 'text-green-800',
            cardColor: 'bg-green',
            subtitleColor: 'text-green-700',
            textColor: 'text-green-600',
            content: [
                {
                    text: 'User-owned data stores are a new paradigm for user-data storage. Instead of storing your users\' data to a central database for each of your applications, you can directly read / write to your users\' data stores.',
                    text2: 'These will contain all of a user\'s data from across all their Basic apps. Your users will provision access of their data to your apps.',
                    url: 'https://docs.basic.tech/info/user-owned-data-stores',
                    urlText: 'Discover user-owned data stores',
                },
                {
                    subtitle: '🪪 Basic.ID',
                    text: 'Basic.ID is the easiest way for your users to create their data stores. They will use Basic.ID to sign in to your apps, and manage their account and app permissions.',
                    text2: 'Basic.ID is also how your users can access their data interoperably and run analytics on their data, or pair it with personal AI agents.',
                    url: 'https://basic.id',
                    urlText: 'Try Basic.ID',
                },
                {
                    subtitle: '🎒 Self-hostable data stores',
                    text: 'Users can self-host their data stores or host with any other provider. This gives them the flexibility of cost, security and privacy for their personal and business needs.',
                    comingSoon: 'Self-hosting will be available soon.'
                },
            ],
            video: '/user-owned-animation.mp4',
        },
        {
            title: 'developer platform',
            layout: 'grid',
            titleColor: 'text-indigo-800',
            cardColor: 'bg-indigo',
            subtitleColor: 'text-indigo-700',
            textColor: 'text-indigo-600',
            content: [
                {
                    text: 'We want to make the developer experience for our builders exceptional.',
                    text2: 'That\'s why we\'ve made Basic available with local-first architecture, a tech stack where your apps perform primary read / write operations to a local database on your users\' devices while our custom sync engine maintains real-time state across multiple devices and users.',
                    url: 'https://docs.basic.tech/info/local-first-sync',
                    urlText: 'Explore local-first architecture',
                },
                {
                    subtitle: '💾 Client SDKs',
                    text: 'Basic SDKs speed up development by removing the need for writing and handling read / write API calls to the server, and auth and token management.',
                    url: 'https://www.npmjs.com/package/@basictech/react',
                    urlText: 'Install React SDK',
                },
                {
                    subtitle: '💻 Admin console',
                    text: 'The admin console provides an easy UI to manage all your projects as a development team including API keys, schemas, and version history. ',
                    url: 'https://app.basic.tech',
                    urlText: 'Access admin console',
                },
                {
                    subtitle: '👨🏾‍💻 Command Line Interface (CLI)',
                    text: 'We integrate your most frequently used commands and operations from the admin console directly into your terminal, so that you never need to leave your programming workflow.',
                    url: 'https://www.npmjs.com/package/@basictech/cli',
                    urlText: 'Download CLI',
                },
                {
                    subtitle: '📚 Docs',
                    text: 'Browse through our extensive documentation to learn more about the philosophy behind Basic, and how to get started.',
                    url: 'https://docs.basic.tech',
                    urlText: 'Read Basic docs',
                },
            ]
        },
        {
            title: 'protocol',
            titleColor: 'text-pink-800',
            cardColor: 'bg-pink',
            subtitleColor: 'text-pink-700',
            textColor: 'text-pink-600',
            content: [
                {
                    text: 'We\'re on a bold and ambitious mission to dismantle walled gardens and replace them with a collaborative and frictionless user-owned web.',
                    text2: 'We think the internet can work better when data is user-owned. User-owned data is more interoperable, secure, and better for analytics - but it\'s also fairer.',
                    text3: 'To achieve this, we\'ve designed the Basic protocol to be an open, federated layer which powers our data stores. Data in data stores are ever-lasting because it can be accessed by spinning up a server via its APIs, even if Basic were to ever become obsolete.',
                    text4: 'We also understand that the future of the internet is only as powerful as its adoption - therefore, we currently invite developers to contribute to and partake in the Basic protocol.',
                    url: 'https://github.com/basicdb',
                    urlText: 'View Basic codebase',
                },
            ],
            video: '/network-animation.mp4',
        }
    ]

    return (
        <div>
            <h2 className='h-[10vh] text-center mt-[5vh] w-[calc(100%-2rem)] mx-4'>
                <span className='text-green-700 text-3xl md:text-4xl lg:text-5xl font-semibold'>data in users' hands, </span>
                <span className='text-pink-600 text-3xl md:text-4xl lg:text-5xl font-semibold'>development in yours :)</span>
            </h2>
            <MarqueeDemo />
            {mediumCardElements.map((card, index) => (
                <MediumCard key={index} {...card} />
            ))}
            <Benefits benefits={moreBenefits} title="many more benefits..." />
        </div>
    )
}