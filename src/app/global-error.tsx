'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // eslint-disable-next-line no-console
  console.log(error);
  return (
    <html
      lang="en"
      style={{
        boxSizing: 'border-box',
        backgroundColor: '#f5f5f5',
        height: '100dvh',
      }}
    >
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '1rem',
          color: '#2c2c2c',
          fontFamily: 'monospace',
          fontSize: '1rem',
        }}
      >
        <h2
          style={{
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            lineHeight: 1.2,
          }}
        >
          Ooops, there was an error!
        </h2>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: 0,
            margin: 0,
            backgroundColor: 'transparent',
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            lineHeight: 1,
            border: 0,
            opacity: 1,
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
