import { useState } from 'react';
import { RectangleCheckBox } from '@/components/common/RectangleCheckBox';
import { Input } from '@/pages/artwork-register/index.style';
import { MaterialContainer, MaterialItem } from './index.style'; // 스타일 import
import { materials } from '@/pages/artwork-register/constants/genres';

interface MaterialCheckBoxProps {
  onChange: (id: string) => void;
}

const MaterialCheckBox = ({ onChange }: MaterialCheckBoxProps) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [otherMaterial, setOtherMaterial] = useState<string>('');

  const handleMaterialChange = (id: string) => {
    setSelectedMaterial(id); // 새로운 재료 선택
    onChange(id); // 부모 컴포넌트에 변경 사항 전달
  };

  return (
    <MaterialContainer>
      {materials.map((material) => (
        <MaterialItem key={material.id}>
          <RectangleCheckBox
            id={material.id}
            label={material.label}
            checked={selectedMaterial === material.id} // 선택된 재료와 비교
            onChange={handleMaterialChange}
          />
        </MaterialItem>
      ))}
      {selectedMaterial === 'other' && (
        <Input
          placeholder="기타 재료를 입력하세요"
          value={otherMaterial}
          onChange={(e) => setOtherMaterial(e.target.value)}
        />
      )}
    </MaterialContainer>
  );
};

export default MaterialCheckBox;
