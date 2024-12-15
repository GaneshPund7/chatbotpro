import { KeenIcon, MenuIcon, MenuItem, MenuLink, MenuSeparator, MenuSub, MenuTitle } from '@/components';
import { Link } from 'react-router-dom';
const DropdownCrudItem1 = () => {
  return <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
      
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="pencil" />

          </MenuIcon>
          <MenuTitle>Edit</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuSeparator />
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="copy" />
          </MenuIcon>
          <MenuTitle>Duplicate</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="copy" />
          </MenuIcon>
          <MenuTitle> 
          <Link to="/public-profile/my-bot/bot-workflow" className="btn btn-link">
          Create New
        </Link>
          </MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuSeparator />
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="trash" />
          </MenuIcon>
          <MenuTitle>Run</MenuTitle>
        </MenuLink>
      </MenuItem>
    </MenuSub>;
};
export { DropdownCrudItem1 };