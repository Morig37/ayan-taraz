// src/components/admin/backup/BackupManager.tsx
import React, { useState } from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
} from '@mui/material';
import {
  Backup,
  Restore,
  Delete,
  Download,
  Settings,
} from '@mui/icons-material';
import {
  BackupFile,
  BackupConfig,
  BackupType,
  BackupStatus,
} from '../../../types/backup';

interface BackupManagerProps {
  backups: BackupFile[];
  config: BackupConfig;
  onCreateBackup: (config: Partial<BackupConfig>) => Promise<void>;
  onRestoreBackup: (id: string) => Promise<void>;
  onDeleteBackup: (id: string) => Promise<void>;
  onDownloadBackup: (id: string) => Promise<void>;
  onUpdateConfig: (config: BackupConfig) => Promise<void>;
}

const statusColors: Record<BackupStatus, any> = {
  pending: 'default',
  running: 'info',
  completed: 'success',
  failed: 'error',
};

export const BackupManager: React.FC<BackupManagerProps> = ({
  backups,
  config,
  onCreateBackup,
  onRestoreBackup,
  onDeleteBackup,
  onDownloadBackup,
  onUpdateConfig,
}) => {
  const [showConfig, setShowConfig] = useState(false);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [creatingBackup, setCreatingBackup] = useState(false);
  const [newBackupConfig, setNewBackupConfig] = useState<Partial<BackupConfig>>(
    {
      type: 'full',
      includeFiles: true,
      includeDatabase: true,
      includeSettings: true,
      compression: true,
      encrypt: true,
    }
  );

  const handleCreateBackup = async () => {
    setCreatingBackup(true);
    try {
      await onCreateBackup(newBackupConfig);
      setShowCreateDialog(false);
    } finally {
      setCreatingBackup(false);
    }
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">مدیریت پشتیبان‌گیری</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<Settings />}
              onClick={() => setShowConfig(true)}
            >
              تنظیمات
            </Button>
            <Button
              variant="contained"
              startIcon={<Backup />}
              onClick={() => setShowCreateDialog(true)}
            >
              پشتیبان‌گیری جدید
            </Button>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>نام فایل</TableCell>
                <TableCell>نوع</TableCell>
                <TableCell>تاریخ ایجاد</TableCell>
                <TableCell>حجم</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {backups.map(backup => (
                <TableRow key={backup.id}>
                  <TableCell>{backup.filename}</TableCell>
                  <TableCell>
                    <Chip
                      label={
                        backup.type === 'full'
                          ? 'کامل'
                          : backup.type === 'partial'
                            ? 'جزئی'
                            : 'تنظیمات'
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat('fa-IR', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    }).format(new Date(backup.createdAt))}
                  </TableCell>
                  <TableCell>
                    {(backup.size / (1024 * 1024)).toFixed(2)} MB
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={backup.status}
                      color={statusColors[backup.status]}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => onRestoreBackup(backup.id)}
                      disabled={backup.status !== 'completed'}
                    >
                      <Restore />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => onDownloadBackup(backup.id)}
                      disabled={backup.status !== 'completed'}
                    >
                      <Download />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => onDeleteBackup(backup.id)}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* دیالوگ ایجاد پشتیبان جدید */}
      <Dialog
        open={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>ایجاد پشتیبان جدید</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl fullWidth>
              <InputLabel>نوع پشتیبان</InputLabel>
              <Select
                value={newBackupConfig.type}
                label="نوع پشتیبان"
                onChange={e =>
                  setNewBackupConfig({
                    ...newBackupConfig,
                    type: e.target.value as BackupType,
                  })
                }
              >
                <MenuItem value="full">پشتیبان کامل</MenuItem>
                <MenuItem value="partial">پشتیبان جزئی</MenuItem>
                <MenuItem value="settings">فقط تنظیمات</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  checked={newBackupConfig.includeFiles}
                  onChange={e =>
                    setNewBackupConfig({
                      ...newBackupConfig,
                      includeFiles: e.target.checked,
                    })
                  }
                />
              }
              label="شامل فایل‌ها"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={newBackupConfig.includeDatabase}
                  onChange={e =>
                    setNewBackupConfig({
                      ...newBackupConfig,
                      includeDatabase: e.target.checked,
                    })
                  }
                />
              }
              label="شامل پایگاه داده"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={newBackupConfig.includeSettings}
                  onChange={e =>
                    setNewBackupConfig({
                      ...newBackupConfig,
                      includeSettings: e.target.checked,
                    })
                  }
                />
              }
              label="شامل تنظیمات"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={newBackupConfig.compression}
                  onChange={e =>
                    setNewBackupConfig({
                      ...newBackupConfig,
                      compression: e.target.checked,
                    })
                  }
                />
              }
              label="فشرده‌سازی"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={newBackupConfig.encrypt}
                  onChange={e =>
                    setNewBackupConfig({
                      ...newBackupConfig,
                      encrypt: e.target.checked,
                    })
                  }
                />
              }
              label="رمزنگاری"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCreateDialog(false)}>انصراف</Button>
          <Button
            variant="contained"
            onClick={handleCreateBackup}
            disabled={creatingBackup}
            startIcon={
              creatingBackup ? <CircularProgress size={20} /> : <Backup />
            }
          >
            شروع پشتیبان‌گیری
          </Button>
        </DialogActions>
      </Dialog>

      {/* دیالوگ تنظیمات پشتیبان‌گیری */}
      <Dialog
        open={showConfig}
        onClose={() => setShowConfig(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>تنظیمات پشتیبان‌گیری</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              زمانبندی پشتیبان‌گیری خودکار
            </Typography>
            <FormControl fullWidth>
              <InputLabel>تناوب</InputLabel>
              <Select
                value={config.schedule?.frequency || 'daily'}
                label="تناوب"
                onChange={e =>
                  onUpdateConfig({
                    ...config,
                    schedule: {
                      ...config.schedule,
                      frequency: e.target.value as
                        | 'daily'
                        | 'weekly'
                        | 'monthly',
                    },
                  })
                }
              >
                <MenuItem value="daily">روزانه</MenuItem>
                <MenuItem value="weekly">هفتگی</MenuItem>
                <MenuItem value="monthly">ماهانه</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="subtitle1" gutterBottom>
              نگهداری نسخه‌های پشتیبان
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                type="number"
                label="تعداد نسخه‌ها"
                value={config.retention.count}
                onChange={e =>
                  onUpdateConfig({
                    ...config,
                    retention: {
                      ...config.retention,
                      count: parseInt(e.target.value),
                    },
                  })
                }
              />
              <TextField
                type="number"
                label="مدت نگهداری (روز)"
                value={config.retention.days}
                onChange={e =>
                  onUpdateConfig({
                    ...config,
                    retention: {
                      ...config.retention,
                      days: parseInt(e.target.value),
                    },
                  })
                }
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfig(false)}>بستن</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
