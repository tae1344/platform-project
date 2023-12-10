export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <p>template.tsx</p>
    </div>
  );
}
