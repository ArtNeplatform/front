import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';
import PrimarySpinner from '@/components/common/PrimarySpinner';
import { toast } from 'sonner';

type TProtectedRouteProps = {
  children: React.ReactNode;
  redirectPath?: string;
};

/**
 * 로그인 여부를 확인하고, 로그인이 필요한 페이지에 접근할 때 사용되는 라우트 컴포넌트입니다.
 * @param {React.ReactNode} children - 보호된 라우트의 자식 요소
 * @param {string} redirectPath - 로그인이 필요한 페이지에 접근할 때 리다이렉트할 경로
 * @author 홍규진
 * */
export function AuthCheckRoute({
  children,
  redirectPath = '/login',
}: TProtectedRouteProps) {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <PrimarySpinner />;
  }

  if (!isLoggedIn) {
    toast.error('로그인후 이용가능합니다 😄');
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}
