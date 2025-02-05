// src/components/admin/users/UsersList.tsx
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Chip,
  Menu,
  MenuItem,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import {
  Edit,
  Delete,
  Block,
  CheckCircle,
  MoreVert,
  Add,
  Search,
} from '@mui/icons-material';
import { User, UserRole } from '../../../types/user';

interface UsersListProps {
  users: User[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: string) => void;
  onRoleChange: (id: string, role: UserRole) => void;
}

const roleColors = {
  admin: 'error',
  manager: 'warning',
  editor: 'info',
  user: 'default',
} as const;

export const UsersList: React.FC<UsersListProps> = ({
  users,
  onDelete,
  onStatusChange,
  onRoleChange,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [roleDialogOpen, setRoleDialogOpen] = useState(false);
  const [newRole, setNewRole] = useState<UserRole>('user');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, user: User) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleRoleDialogOpen = () => {
    setRoleDialogOpen(true);
    handleMenuClose();
  };

  const handleRoleChange = () => {
    if (selectedUser) {
      onRoleChange(selectedUser.id, newRole);
    }
    setRoleDialogOpen(false);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1 }}>
          <TextField
            size="small"
            placeholder="جستجوی کاربر..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search />,
            }}
            sx={{ width: 300 }}
          />
        </Box>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => {/* ناوبری به فرم افزودن کاربر */}}
        >
          افزودن کاربر
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>کاربر</TableCell>
              <TableCell>ایمیل</TableCell>
              <TableCell>موبایل</TableCell>
              <TableCell>نقش</TableCell>
              <TableCell>وضعیت</TableCell>
              <TableCell>آخرین ورود</TableCell>
              <TableCell>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={user.avatar} alt={user.firstName}>
                      {user.firstName[0]}
                    </Avatar>
                    <Box>
                      {`${user.firstName} ${user.lastName}`}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>
                  <Chip
                    label={user.role}
                    color={roleColors[user.role]}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    color={user.status === 'active' ? 'success' : 'error'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  {user.lastLogin
                    ? new Date(user.lastLogin).toLocaleDateString('fa-IR')
                    : '---'}
                </TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={(e) => handleMenuOpen(e, user)}
                  >
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleRoleDialogOpen}>
          تغییر نقش
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (selectedUser) {
              onStatusChange(
                selectedUser.id,
                selectedUser.status === 'active' ? 'inactive' : 'active'
              );
            }
            handleMenuClose();
          }}
        >
          {selectedUser?.status === 'active' ? 'غیرفعال‌سازی' : 'فعال‌سازی'}
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (selectedUser) onDelete(selectedUser.id);
            handleMenuClose();
          }}
          sx={{ color: 'error.main' }}
        >
          حذف کاربر
        </MenuItem>
      </Menu>

      <Dialog open={roleDialogOpen} onClose={() => setRoleDialogOpen(false)}>
        <DialogTitle>تغییر نقش کاربر</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>نقش جدید</InputLabel>
            <Select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value as UserRole)}
              label="نقش جدید"
            >
              <MenuItem value="admin">مدیر</MenuItem>
              <MenuItem value="manager">مدیر محتوا</MenuItem>
              <MenuItem value="editor">ویراستار</MenuItem>
              <MenuItem value="user">کاربر عادی</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRoleDialogOpen(false)}>انصراف</Button>
          <Button onClick={handleRoleChange} variant="contained">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};