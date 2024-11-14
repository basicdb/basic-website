interface TabContent {
    title: string;
    labelIcon?: string;
    description?: string;
    description2?: string;
    code?: string;
    icon?: string;
    image?: {
        src: string;
        width: number;
        height: number;
    };
}

interface DeveloperFeature {
    id: string;
    label: string;
    labelIcon?: string;
    content: TabContent;
    image?: {
        src: string;
        width: number;
        height: number;
    };
}

const developerFeatures: DeveloperFeature[] = [
    {
        id: "localfirst",
        label: "Local-first",
        labelIcon: "💭",
        content: {
            title: "Local-first sync engine 💭",
            description: "Using Basic SDKs unlocks local-first architecture, where your app will use your users' local storage for primary read / writes. This eliminates the need for loading screens and spinners, makes your app infinitely snappier, and enables offline work.",
            description2: "In the background, our sync engine keeps all users and their devices caught up with the latest data so that they can collaborate in real-time.",
            image: {
                src: "/local-first-only.svg",
                width: 300,
                height: 300
            }
        }
    },
    {
        id: "schema",
        label: "Schema-as-code",
        labelIcon: "📝",
        content: {
            title: "Declarative schema-as-code 📝",
            description: "We've designed schemas in Basic to be declarative code in a config file that is stored in your app's repository. Schemas can be versioned and tracked in Git for full history and better governance of your schema.",
            description2: "Schema-as-code makes it easy to manage your data model and test / evolve it over time. Your backend and frontends can always be in sync within deployment environments, and across users and their devices.",
            code: `export const schema = {
    version: 6,
    project_id: "xyz",
    tables: {
        feedback_table: { "fields": {} },
        items_table: { "fields": {} },
        comments_table: { "fields": {} }
    }
}`
        }
    },
    {
        id: "enterpriseready",
        label: "Enterprise-ready",
        labelIcon: "🏦",
        content: {
            title: "Build enterprise-ready apps 🏦",
            description: "In Basic's data storage model, sensitive data like medical records, SSNs, and payment information never touches your servers. Data is always owned and controlled by your users and your apps can meet the highest standards for data protection and governance like HIPAA, SOC 2, PII, and CCPA.",
            description2: "You can also easily enable features like role-based access control, SSO, and more.",
            image: {
                src: "/PDS.svg",
                width: 450,
                height: 500
            }
        }
    },
    {
        id: "opensource",
        label: "Open source",
        labelIcon: "✍🏽",
        content: {
            title: "Open source and transparent ✍🏽",
            description: "We believe in building for an open and accessible internet, and we've made Basic's core infrastructure open source so that you can build on it too. All our code is available on Github.",
            description2: "The Basic protocol will always be open source for anyone's use, and we'll continue to support and build it as a community project. It can be self-hosted or used via our commercial offering.",
            icon: "github"
        }
    }
];

export default developerFeatures;
