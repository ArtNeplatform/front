import { PageLayout } from "@/components/common/PageLayout";
import { Text } from "@/styles/text";
import TestComponents from '@/test/TestComponent';

export default function Test() {
  return (
    <PageLayout>
      <Text size={56} color="black">
        테스트 페이지
      </Text>
      <TestComponents/>
    </PageLayout>
  );
}
