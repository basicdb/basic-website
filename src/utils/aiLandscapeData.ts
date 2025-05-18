interface TabContent {
    title: string;
    content: string[] | string; // Can be either an array of paragraphs or a single string
    image?: string;
    video?: string;
}

const aiLandscapeData: TabContent[] = [
    {
        title: "AI apps and agents",
        content: [
            "AI applications and agents are transforming how we interact with software. These intelligent systems can understand context, learn from interactions, and perform complex tasks autonomously.",
            "From virtual assistants to content creation tools, AI agents are becoming integral to modern workflows across industries.",
            "The next generation of AI agents will be more personalized, context-aware, and capable of handling increasingly complex tasks with minimal human intervention."
        ],
        image: "/images/ai-apps.jpg" // You'll need to add this image to your public/images directory
    },
    {
        title: "AI gen platforms",
        content: [
            "Generative AI platforms provide tools and infrastructure for creating AI-powered content and applications.",
            "These platforms offer capabilities like text generation, image synthesis, code completion, and more.",
            "They democratize access to AI technologies, allowing developers and creators to build innovative solutions without deep expertise in machine learning."
        ],
        image: "/images/ai-gen.jpg" // You'll need to add this image to your public/images directory
    },
    {
        title: "AI wearables",
        content: [
            "AI wearables combine artificial intelligence with portable technology, creating devices that can understand and respond to their users and environment.",
            "From smart glasses that overlay information on the world to health monitors that provide personalized insights, these devices are bringing AI closer to our daily lives in seamless ways.",
            "The future of wearables will blend AI with augmented reality, creating immersive experiences that enhance our interactions with the physical world."
        ],
        image: "/images/ai-wearables.jpg" // You'll need to add this image to your public/images directory
    },
    {
        title: "Embedded AI",
        content: [
            "Embedded AI brings intelligence directly to hardware devices, enabling on-device processing without requiring cloud connectivity.",
            "This technology powers smart appliances, autonomous vehicles, and IoT devices.",
            "By processing data locally, embedded AI offers advantages in privacy, latency, and reliability even in environments with limited connectivity."
        ],
        image: "/images/embedded-ai.jpg" // You'll need to add this image to your public/images directory
    },
    {
        title: "...you?",
        content: [
            "The AI landscape continues to evolve rapidly, with new applications and technologies emerging regularly.",
            "Your ideas and innovations could be the next breakthrough in this exciting field.",
            "Whether you're interested in developing new AI applications, enhancing existing platforms, or finding novel ways to integrate AI into everyday life, there's room for your contribution."
        ],
        image: "/images/ai-future.jpg" // You'll need to add this image to your public/images directory
    }
];

export default aiLandscapeData; 