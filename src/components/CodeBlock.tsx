import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, [code]);

    return (
        <pre className="text-white-100 bg-black-800 p-8 rounded-lg font-mono text-xs whitespace-pre">
            <code className="language-typescript">
                {code}
            </code>
        </pre>
    );
}

export default CodeBlock; 