const TransparentText = () => {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <svg width="1000" height="500" viewBox="0 0 1000 500" opacity={0.1} className="scale-[3]">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <text
            x="50%"
            y="50%"
            fill="transparent"
            stroke="url(#grad1)"
            strokeWidth="1"
            fontSize="240"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-Anton"
            style={{ transition: 'stroke-dasharray 1s', strokeDasharray: '500 500' }}
        >
            Ravolo
        </text>
        </svg>
    </div>
  );
}

export default TransparentText;


