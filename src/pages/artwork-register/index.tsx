import { PageLayout } from '@/components/common/PageLayout';
import { Text } from '@/styles/text';
import {
  Container,
  Form,
  Input,
  TextArea,
  Button,
  ImageRegisterSection,
  ArtworkSizeDetailContainer,
  ButtonContainer,
} from './index.style.ts';
import ThemeChooser from '@/components/common/ThemeChooser';
import GenreCheckBox from '@/pages/artwork-register/components/GenreCheckBox/index.tsx';
import MaterialCheckBox from '@/pages/artwork-register/components/MaterialCheckBox/index.tsx';
import { ArtworkDetailBelowLabel } from '@/pages/artwork-register/components/ArtworkDetailBelowLabel/index.tsx';
import useArtworkForm from './hooks/useArtworkRegisterForm.ts';
import Divider from '@/components/common/Divider';
import { sizeThemes } from '@/pages/artwork-register/constants/themes';
import ImageUploader from './components/ImageUploader/index.tsx';

export const ArtworkRegister = () => {
  const { formData, setFormData, handleSubmit } = useArtworkForm();

  return (
    <PageLayout>
      <Container>
        {/* 카테고리 선택 섹션 */}
        <Text size={24} color="black" weight="semibold">
          카테고리
        </Text>
        <ArtworkDetailBelowLabel label="테마 선택">
          <ThemeChooser />
        </ArtworkDetailBelowLabel>
        <ArtworkDetailBelowLabel label="테마">
          <ThemeChooser themes={sizeThemes} />
        </ArtworkDetailBelowLabel>
        <Divider />

        {/* 작품 이미지 등록 섹션 */}
        <ImageRegisterSection
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Text size={24} color="black" weight="semibold">
            작품 이미지
          </Text>

          <ImageUploader
            images={formData.images || []}
            setImages={(newImages) =>
              setFormData((prev) => ({ ...prev, images: newImages }))
            }
          />
        </ImageRegisterSection>
        <Divider />

        {/* 작품 정보 입력 섹션 */}
        <Text size={24} color="black" weight="semibold">
          작품 정보
        </Text>
        <Form onSubmit={handleSubmit}>
          <ArtworkDetailBelowLabel label="작품 제목">
            <Input
              placeholder="작품 제목을 입력하세요"
              value={formData.title}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, title: e.target.value }));
              }}
            />
          </ArtworkDetailBelowLabel>
          <ArtworkDetailBelowLabel label="제작연도">
            <Input
              type="number"
              style={{ width: '40%' }}
              placeholder="제작연도를 입력하세요"
              value={formData.year}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, year: e.target.value }));
              }}
            />
          </ArtworkDetailBelowLabel>
          <ArtworkDetailBelowLabel label="장르 선택">
            <GenreCheckBox
              onChange={(id) => {
                setFormData((prev) => ({ ...prev, genre: id }));
              }}
            />
          </ArtworkDetailBelowLabel>
          <ArtworkDetailBelowLabel label="재료 선택">
            <MaterialCheckBox
              onChange={(id) => {
                setFormData((prev) => ({ ...prev, material: id }));
              }}
            />
          </ArtworkDetailBelowLabel>

          <ArtworkSizeDetailContainer>
            <div style={{ flex: 1 }}>
              <ArtworkDetailBelowLabel label="높이 (단위 cm)">
                <Input
                  type="number"
                  style={{ width: '90%' }}
                  placeholder="높이를 입력하세요"
                  value={formData.height}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      height: e.target.value,
                    })); // 상태 업데이트
                  }}
                />
              </ArtworkDetailBelowLabel>
            </div>
            <div style={{ flex: 1 }}>
              <ArtworkDetailBelowLabel label="너비 (단위 cm)">
                <Input
                  type="number"
                  style={{ width: '90%' }}
                  placeholder="너비를 입력하세요"
                  value={formData.width}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, width: e.target.value }));
                  }}
                />
              </ArtworkDetailBelowLabel>
            </div>
            <div style={{ flex: 1 }}>
              <ArtworkDetailBelowLabel label="호수">
                <Input
                  type="number"
                  style={{ width: '90%' }}
                  placeholder="호수를 입력하세요"
                  value={formData.number}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      number: e.target.value,
                    })); // 상태 업데이트
                  }}
                />
              </ArtworkDetailBelowLabel>
            </div>
          </ArtworkSizeDetailContainer>
          <ArtworkDetailBelowLabel label="액자 ">
            <Input
              type="number"
              style={{ width: '40%' }}
              placeholder="액자 입력하세요"
              value={formData.frameNumber}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  frameNumber: e.target.value,
                }));
              }}
            />
          </ArtworkDetailBelowLabel>
          <ArtworkDetailBelowLabel label="설명">
            <TextArea
              placeholder="작품에 대한 설명을 입력하세요"
              rows={6}
              value={formData.description}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            />
          </ArtworkDetailBelowLabel>
          <ButtonContainer>
            <Button
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
                borderRadius: '4px',
              }}
              type="submit"
            >
              취소하기
            </Button>
            <Button>등록하기</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </PageLayout>
  );
};
