import React, { useState } from "react";
import { Button } from "./components/Button";
import { Tabs } from "./components/Tabs";
import DemoBlock from "./DemoBlock";
import "./App.css";

/* ================= ICONS ================= */
const DownloadIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166M5.772 5.79L4.772 19.673A2.25 2.25 0 007.016 21h8.968a2.25 2.25 0 002.244-2.077L19.228 5.79"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

/* ================= APP ================= */
export default function App() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 px-6 py-14">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            React Morp UI
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Modern React Button Components built with TailwindCSS
          </p>
        </header>

        {/* ===== INSTALL COMMAND ===== */}
        <DemoBlock
          title="Installation"
          preview={
            <div className="flex items-center justify-center gap-2 bg-gray-900 text-green-400 px-4 py-3 rounded-lg font-mono text-sm">
              <span>npm install @phamlinh98/react-morp-ui@latest</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "npm install @phamlinh98/react-morp-ui@latest"
                  );
                }}
                className="ml-auto px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors"
                >
                Copy
                </button>
              </div>
              }
              code={`import '@phamlinh98/react-morp-ui/dist/style.css';
       import { Button, Tabs } from '@phamlinh98/react-morp-ui';`}
            />

            {/* ===== BASIC ===== */}
        <DemoBlock
          title="Basic Variants"
          preview={
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="info">Info</Button>
            </div>
          }
          code={`<Button variant="primary">Primary</Button>`}
        />

        {/* ===== OUTLINE ===== */}
        <DemoBlock
          title="Outline Variants"
          preview={
            <div className="flex flex-wrap gap-4">
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-success">Success</Button>
              <Button variant="outline-danger">Danger</Button>
            </div>
          }
          code={`<Button variant="outline-primary">Primary</Button>`}
        />

        {/* ===== GRADIENT ===== */}
        <DemoBlock
          title="Gradient Variants"
          preview={
            <div className="flex flex-wrap gap-4">
              <Button variant="gradient-blue">Blue</Button>
              <Button variant="gradient-purple">Purple</Button>
              <Button variant="gradient-green">Green</Button>
              <Button variant="gradient-orange">Orange</Button>
            </div>
          }
          code={`<Button variant="gradient-blue">Blue</Button>`}
        />

        {/* ===== SIZES ===== */}
        <DemoBlock
          title="Sizes"
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="md">MD</Button>
              <Button size="lg">LG</Button>
              <Button size="xl">XL</Button>
            </div>
          }
          code={`<Button size="lg">Large</Button>`}
        />

        {/* ===== ICONS ===== */}
        <DemoBlock
          title="With Icons"
          preview={
            <div className="flex flex-wrap gap-4">
              <Button icon={<DownloadIcon />}>Download</Button>
              <Button variant="danger" icon={<TrashIcon />}>
                Delete
              </Button>
              <Button variant="success" icon={<PlusIcon />}>
                Create
              </Button>
              <Button
                variant="gradient-purple"
                icon={<HeartIcon />}
                iconPosition="right"
              >
                Like
              </Button>
            </div>
          }
          code={`<Button icon={<DownloadIcon />}>Download</Button>`}
        />

        {/* ===== STATES ===== */}
        <DemoBlock
          title="States"
          preview={
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading={loading} onClick={handleLoadingDemo}>
                {loading ? "Loading..." : "Click to Load"}
              </Button>
            </div>
          }
          code={`<Button loading>Loading...</Button>`}
        />

        {/* ===== TABS - VARIANTS ===== */}
        <DemoBlock
          title="Tabs - Line Variant"
          preview={
            <Tabs
              variant="line"
              className="bg-white rounded-lg shadow-sm"
              items={[
                { key: '1', label: 'Profile', icon: <HeartIcon />, children: <div className="p-4">✨ Profile content with beautiful gradient and animations</div> },
                { key: '2', label: 'Settings', icon: <PlusIcon />, children: <div className="p-4">⚙️ Configure your preferences here</div> },
                { key: '3', label: 'Downloads', icon: <DownloadIcon />, children: <div className="p-4">📥 Your download history</div> },
              ]}
            />
          }
          code={`<Tabs variant="line" items={[...]} />`}
        />

        <DemoBlock
          title="Tabs - Rounded Card Variant"
          preview={
            <Tabs
              variant="rounded-card"
              size="md"
              className="bg-white rounded-lg shadow-sm p-4"
              items={[
                { key: '1', label: 'Dashboard', children: <div className="p-4">🎨 Beautiful gradient design with rounded cards</div> },
                { key: '2', label: 'Analytics', children: <div className="p-4">📊 View your stats and analytics</div> },
                { key: '3', label: 'Reports', children: <div className="p-4">📈 Generate detailed reports</div> },
              ]}
            />
          }
          code={`<Tabs variant="rounded-card" items={[...]} />`}
        />

        <DemoBlock
          title="Tabs - Pill Variant"
          preview={
            <Tabs
              variant="pill"
              centered
              className="bg-white rounded-lg shadow-sm p-4"
              items={[
                { key: '1', label: 'Overview', children: <div className="p-4 text-center">🌟 Smooth pill-shaped tabs</div> },
                { key: '2', label: 'Features', children: <div className="p-4 text-center">⚡ Explore amazing features</div> },
                { key: '3', label: 'Pricing', children: <div className="p-4 text-center">💎 Check our plans</div> },
              ]}
            />
          }
          code={`<Tabs variant="pill" centered items={[...]} />`}
        />

        <DemoBlock
          title="Tabs - Edged Card Variant"
          preview={
            <Tabs
              variant="edged-card"
              className="bg-white rounded-lg shadow-sm p-4"
              items={[
                { key: '1', label: 'Design', children: <div className="p-4">🎯 Modern edged card with stunning gradients</div> },
                { key: '2', label: 'Development', children: <div className="p-4">💻 Development tools and resources</div> },
                { key: '3', label: 'Testing', children: <div className="p-4">🧪 Quality assurance and testing</div> },
              ]}
            />
          }
          code={`<Tabs variant="edged-card" items={[...]} />`}
        />

        <DemoBlock
          title="Tabs - With Icons & Sizes"
          preview={
            <div className="space-y-8">
              <Tabs
                variant="rounded-card"
                size="lg"
                className="bg-white rounded-lg shadow-sm p-4"
                items={[
                  { key: '1', label: 'Favorites', icon: <HeartIcon />, children: <div className="p-5 text-lg">❤️ Large size with icons</div> },
                  { key: '2', label: 'Downloads', icon: <DownloadIcon />, children: <div className="p-5 text-lg">📦 Your downloads</div> },
                ]}
              />
              <Tabs
                variant="pill"
                size="sm"
                className="bg-white rounded-lg shadow-sm p-3"
                items={[
                  { key: '1', label: 'Create', icon: <PlusIcon />, children: <div className="p-3 text-sm">➕ Small compact tabs</div> },
                  { key: '2', label: 'Delete', icon: <TrashIcon />, children: <div className="p-3 text-sm">🗑️ Remove items</div> },
                ]}
              />
            </div>
          }
          code={`<Tabs variant="rounded-card" size="lg" items={[...]} />
<Tabs variant="pill" size="sm" items={[...]} />`}
        />

          {/* ===== FOOTER ===== */}
        <footer className="text-center mt-20 text-gray-600 text-sm">
          Built with ❤️ copyright © 2026 by Linhthusinh98
        </footer>
      </div>
    </div>
  );
}
