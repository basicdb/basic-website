import { motion } from 'framer-motion';

const Benefits = ({
    benefits,
    title,
    subheader
}: {
    benefits: Array<{ title: string; description: string }>;
    title: string,
    subheader?: string
}) => {
    return (
        <section
            aria-labelledby="features"
            className="w-full section-padding bg-black relative overflow-hidden"
        >
            {/* Animated circuit board background */}
            <div className="absolute inset-0 opacity-5">
                <div className="circuit-pattern" />
            </div>

            <div className="container-default relative">
                <div className="mb-16 relative">
                    <div className="inline-block px-4 py-2 rounded-full text-sm font-mono bg-purple-500/20 text-purple-400 border border-purple-500/40 mb-4">
                        $ cat benefits.json
                    </div>
                    <h2 className="heading-1 font-mono text-white-200 glitch-text">
                        {title}
                    </h2>
                    {subheader && (
                        <p className="body-large text-white-300 mt-2 font-mono border-l-4 border-purple-500 pl-4">
                            {subheader}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                            <div className="relative p-6 bg-black-800 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="text-2xl">{benefit.title.split(' ')[0]}</div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
                                </div>
                                <h3 className="heading-3 text-white-100 font-mono mb-2">
                                    {benefit.title.split(' ').slice(1).join(' ')}
                                </h3>
                                <p className="body-default text-white/70 font-mono">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits;