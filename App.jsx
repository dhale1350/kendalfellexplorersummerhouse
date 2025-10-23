const App = () => {
    const primaryAccentColor = 'var(--primary-accent-color)';
    const highlightColor = 'var(--highlight-color)';

    const emphasizedText = {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: primaryAccentColor,
    };

    return (
        <div className="max-w-2xl mx-auto p-8 text-center">
            <h1 className="text-4xl font-bold uppercase tracking-wider" style={{ color: primaryAccentColor }}>
                KENDAL FELL EXPLORER
            </h1>
            <div className="my-8 flex justify-center items-center space-x-4">
                <div
                    className="breathing-icon w-24 h-24 rounded-full flex items-center justify-center text-6xl font-bold text-white"
                    style={{ backgroundColor: highlightColor, textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
                >
                    3
                </div>
                <h2 className="text-5xl font-semibold" style={{ color: primaryAccentColor }}>
                    The Summerhouse
                </h2>
            </div>
            <div className="my-8">
                <img
                    src="https://placehold.co/1000x800/e4e2d8/38a169?text=Your+Summerhouse+Illustration"
                    alt="A placeholder illustration of the Summerhouse in Kendal Fell."
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <p className="text-lg text-left leading-relaxed text-gray-700">
                In the corner of Boundary Bank House, beside the footpath, is a rather spectacular summerhouse built in the <span style={emphasizedText}>French chateau style</span>—a rare sight on the Fell! It is distinctly tall, narrow, and features a steeply pitched roof. A little further down the footpath, you can catch incredible views over the huge Kendal Fell Quarry. This summerhouse serves as a reminder of the historical elegance and the rich, hidden stories embedded in this landscape.
            </p>
            <div className="mt-12">
                <a
                    href="https://github.com/your-username/your-repo-name"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white font-bold py-4 px-8 rounded-full transition-transform transform hover:scale-105 shadow-xl"
                    style={{ backgroundColor: primaryAccentColor }}
                >
                    Explore the Full Kendal Fell Trail
                </a>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
