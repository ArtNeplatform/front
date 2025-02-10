import { useState } from 'react';
import { CircleCheckBox } from '@/components/common/CircleCheckBox';
import { Input } from '@/pages/artwork-register/index.style';
import { genres } from '@/pages/artwork-register/constants/genres';
import { GenreContainer, GenreItem } from './index.style'; // 스타일 import

interface GenreCheckBoxProps {
  onChange: (id: string) => void;
}

const GenreCheckBox = ({ onChange }: GenreCheckBoxProps) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [otherGenre, setOtherGenre] = useState<string>('');

  const handleGenreChange = (id: string) => {
    setSelectedGenre(id); // 새로운 장르 선택
    onChange(id); // 부모 컴포넌트에 변경 사항 전달
  };

  return (
    <GenreContainer>
      {genres.map((genre) => (
        <GenreItem key={genre.id}>
          <CircleCheckBox
            id={genre.id}
            label={genre.label}
            onChange={() => handleGenreChange(genre.id)}
            checked={selectedGenre === genre.id} // 선택된 장르와 비교
          />
        </GenreItem>
      ))}
      {selectedGenre === '기타' && (
        <Input
          placeholder="기타 장르를 입력하세요"
          value={otherGenre}
          onChange={(e) => setOtherGenre(e.target.value)}
        />
      )}
    </GenreContainer>
  );
};

export default GenreCheckBox;
