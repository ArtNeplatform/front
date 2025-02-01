import PrimarySpinner from '@/components/common/PrimarySpinner';

/**
 * Suspense 상황 발생시 표시할 컴포넌트
 * FallbackUI 컴포넌트
 * @author 홍규진
 */
export default function FallbackUI() {
  return (
    <div>
      <PrimarySpinner />
    </div>
  );
}

// export function TranslucentFallbackUI() {
//   return (
//     <div >
//       <PrimarySpinner />
//     </div>
//   );
// }
