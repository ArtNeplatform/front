import { useEffect } from 'react';
import { PageLayout } from '@/components/common/PageLayout';
import { Text } from '@/styles/text';
import {
  Container,
  Header,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  Divider,
  ToggleButton,
} from './index.style';
import { useRegisterForm } from './hooks/useRegisterForm'; // 훅 import
import { usePostAuthRegister } from './hooks/usePostAuthRegister';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { formData, handleChange, setFormData } = useRegisterForm();
  const navigate = useNavigate();

  /**
   * 소셜 로그인 후 토큰 받아오기
   * 카카오 로그인 후 토큰 받아오기 - 소셜 로그인 후 토큰 받아올 때, response 값 파싱해서 토큰 받아오기
   * 구글 로그인 후 토큰 받아오기 - 소셜 로그인 후 토큰 받아올 때, URI에 반영되는 토큰 파싱해서 토큰 받아오기
   * @author 홍규진
   */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      formData.code = code;
      formData.social_type = 'GOOGLE';
    } else {
      formData.social_type = 'KAKAO';
    }
  }, []);

  const { mutate: postAuthRegister } = usePostAuthRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData });
    postAuthRegister({
      ...formData,
    });
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <PageLayout>
      <Container>
        <Header>
          <Text size={32} color="black" weight="semibold">
            회원가입
          </Text>
        </Header>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="userType">유형</Label>
            <div style={{ display: 'flex', gap: '16px' }}>
              <ToggleButton
                type="button"
                isActive={formData.role === 'BUYER'}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, role: 'BUYER' }))
                }
              >
                작품 구매자
              </ToggleButton>
              <ToggleButton
                type="button"
                isActive={formData.role === 'AUTHOR'}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, role: 'AUTHOR' }))
                }
              >
                작가
              </ToggleButton>
            </div>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력해 주세요"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="phone_number">전화번호</Label>
            <Input
              id="phone_number"
              name="phone_number"
              type="tel"
              placeholder="전화번호를 입력해 주세요"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <Button type="submit">가입하기</Button>
          <Button
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black',
            }}
            type="button"
            onClick={handleCancel}
          >
            취소
          </Button>
        </Form>

        <Divider />
      </Container>
    </PageLayout>
  );
};
