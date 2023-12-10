'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const onClickHeader = () => {
    router.push('/dashboard', { scroll: true });
  };

  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: 'black',
      }}
    >
      <button onClick={onClickHeader}>게시판 가기 1</button>
      <Link href={'/dashboard'}>게시판 가기 2</Link>
    </div>
  );
}
