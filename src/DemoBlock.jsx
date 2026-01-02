import React, { useState } from 'react';
import { Button } from './components/Button';

const DemoBlock = ({ title, preview, code }) => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">{title}</h3>

            {/* Preview */}
            <div className="mb-4">
                {preview}
            </div>

            {/* Toggle */}
            <Button
                variant="ghost-primary"
                size="sm"
                onClick={() => setOpen(!open)}
            >
                {open ? 'Hide code' : 'Show code'}
            </Button>

            {/* Code Panel */}
            {open && (
                <div className="relative mt-4 bg-gray-900 rounded-xl p-4 text-sm text-green-200 font-mono overflow-x-auto">
                    <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>

                    <pre>
                        <code>{code}</code>
                    </pre>
                </div>
            )}
        </div>
    );
};

export default DemoBlock;
