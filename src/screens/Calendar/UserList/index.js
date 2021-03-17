import React from 'react';
import { useNavigation } from '@react-navigation/native';

//* CUSTOM IMPORTS
import SearchBar from '~/components/SearchBar';
import UserNameList from '~/components/AppointmentNameList';

const UserList = ({ route }) => {
  const { selected } = route.params;

  //* STATES
  const [users, setUsers] = React.useState([
    {
      id: 0,
      name: 'Victor Batisttete',
      email: 'user@email.com',
      admin: true,
    },
  ]);
  const [search, setSearch] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [page, setPage] = React.useState({ page: 1, lastPage: null });

  //* FUNCTIONS

  return (
    <>
      <UserNameList
        ListHeaderComponent={
          <SearchBar
            placeholder="Pesquise um usuário"
            style={{ marginTop: 16 }}
            onSearch={(value) => {
              setSearch(value);
            }}
          />
        }
        users={users}
        // isLoaded={isLoaded}
        selected={selected}
        // onEndReached={handlePaging}
        // onEndReachedThreshold={0.1}
      />
    </>
  );
};
export default UserList;
