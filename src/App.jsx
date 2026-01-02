import React, { useState } from 'react';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  // Demo icons (using simple SVG icons)
  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );

  const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );

  const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            React Morp UI - Button Components
          </h1>
          <p className="text-2xl font-semibold text-gray-700">
            Professional Button Library built with TailwindCSS 🎨✨
          </p>
          <p className="text-base text-purple-600 mt-2 font-medium">
            Hoàn toàn không sử dụng thư viện UI bên ngoài - 100% TailwindCSS
          </p>
        </div>

        {/* Basic Variants */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Basic Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="light">Light</Button>
          </div>
        </section>

        {/* Outline Variants */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Outline Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-info">Info</Button>
          </div>
        </section>

        {/* Ghost Variants */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ghost Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="ghost-primary">Primary</Button>
            <Button variant="ghost-secondary">Secondary</Button>
            <Button variant="ghost-success">Success</Button>
            <Button variant="ghost-danger">Danger</Button>
          </div>
        </section>

        {/* Gradient Variants */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Gradient Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient-blue">Blue Gradient</Button>
            <Button variant="gradient-purple">Purple Gradient</Button>
            <Button variant="gradient-green">Green Gradient</Button>
            <Button variant="gradient-orange">Orange Gradient</Button>
          </div>
        </section>

        {/* Soft Variants */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Soft Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="soft-primary">Primary</Button>
            <Button variant="soft-success">Success</Button>
            <Button variant="soft-danger">Danger</Button>
            <Button variant="soft-warning">Warning</Button>
          </div>
        </section>

        {/* Neon Variants - EXTRA VIBRANT! */}
        <section className="mb-12 bg-gray-900 rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6">✨ Neon Variants - Extra Vibrant!</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="neon-pink" size="lg">Neon Pink</Button>
            <Button variant="neon-cyan" size="lg">Neon Cyan</Button>
            <Button variant="neon-lime" size="lg">Neon Lime</Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="xs">Extra Small</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={<DownloadIcon />}>
              Download
            </Button>
            <Button variant="danger" icon={<TrashIcon />}>
              Delete
            </Button>
            <Button variant="success" icon={<PlusIcon />}>
              Create New
            </Button>
            <Button variant="gradient-purple" icon={<HeartIcon />} iconPosition="right">
              Like
            </Button>
            <Button variant="outline-primary" icon={<PlusIcon />} />
          </div>
        </section>

        {/* States */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Normal</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" loading={loading} onClick={handleLoadingDemo}>
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
            <Button variant="outline-success" loading>Processing...</Button>
          </div>
        </section>

        {/* Full Width */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Full Width</h2>
          <div className="space-y-4">
            <Button variant="primary" fullWidth>Full Width Primary</Button>
            <Button variant="gradient-blue" fullWidth icon={<DownloadIcon />}>
              Full Width with Icon
            </Button>
          </div>
        </section>

        {/* Link Variant */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Link Variant</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="link">Link Button</Button>
            <Button variant="link" size="sm">Small Link</Button>
            <Button variant="link" size="lg">Large Link</Button>
          </div>
        </section>

        {/* Button Groups */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Button Groups</h2>
          <div className="space-y-4">
            <div className="flex gap-0">
              <Button variant="outline-primary" className="rounded-r-none border-r-0">Left</Button>
              <Button variant="outline-primary" className="rounded-none">Middle</Button>
              <Button variant="outline-primary" className="rounded-l-none">Right</Button>
            </div>
            <div className="flex gap-2">
              <Button variant="primary">Save</Button>
              <Button variant="outline-secondary">Cancel</Button>
            </div>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Real-world Examples</h2>
          
          {/* Card with actions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">Product Card</h3>
            <p className="text-gray-600 mb-4">
              Amazing product with great features and benefits for your business.
            </p>
            <div className="flex gap-3">
              <Button variant="gradient-blue" icon={<PlusIcon />}>
                Add to Cart
              </Button>
              <Button variant="outline-primary" icon={<HeartIcon />} />
            </div>
          </div>

          {/* Form actions */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Form Actions</h3>
            <div className="flex justify-end gap-3">
              <Button variant="ghost-secondary">Cancel</Button>
              <Button variant="outline-primary">Save Draft</Button>
              <Button variant="primary" icon={<PlusIcon />}>
                Publish
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            🚀 Ready to use in your Bit.dev components
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React + TailwindCSS | No external UI dependencies
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
