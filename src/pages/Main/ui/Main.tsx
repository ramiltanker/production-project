import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/Stack';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/Page';

const people: ListBoxItem[] = [
  { value: '1', content: 'Durward Reynolds', disabled: false },
  { value: '2', content: 'Kenton Towne', disabled: false },
  { value: '3', content: 'Therese Wunsch', disabled: false },
  { value: '4', content: 'Benedict Kessler', disabled: true },
  { value: '5', content: 'Katelyn Rohan', disabled: false }
];

const Main = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div>dsfdsfsdf</div>
      <VStack>
        <div>dsfdsfsdf</div>
        <ListBox defaultValue="Выберите значение" onChange={() => {}} value={undefined} items={people} />
      </VStack>
      <div>dsfdsfsdf</div>
      <div>dsfdsfsdf</div>
    </Page>
  );
};

export default Main;
