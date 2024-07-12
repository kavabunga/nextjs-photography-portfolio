import { NotFoundWidget } from '@/widgets/not-found';

export default function NotFound() {
  return (
    <div
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NotFoundWidget />
    </div>
  );
}
