// src/components/admin/security/SecurityLogs.tsx
import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  Visibility,
  FilterList,
  Download,
  Search,
} from '@mui/icons-material';
import { SecurityLog, LogLevel } from '../../../types/security';

interface SecurityLogsProps {
  logs: SecurityLog[];
  onExport: () => void;
}

const levelColors: Record<LogLevel, string> = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  critical: 'error',
};

export const SecurityLogs: React.FC<SecurityLogsProps> = ({
  logs,
  onExport,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<LogLevel | 'all'>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLog, setSelectedLog] = useState<SecurityLog | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.ipAddress.includes(searchTerm);
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel;
    const matchesType = selectedType === 'all' || log.type === selectedType;
    return matchesSearch && matchesLevel && matchesType;
  });

  const handleViewDetails = (log: SecurityLog) => {
    setSelectedLog(log);
    setDialogOpen(true);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6">لاگ‌های امنیتی</Typography>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={onExport}
        >
          خروجی Excel
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          size="small"
          placeholder="جستجو..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search />,
          }}
          sx={{ width: 300 }}
        />

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>سطح</InputLabel>
          <Select
            value={selectedLevel}
            label="سطح"
            onChange={(e) => setSelectedLevel(e.target.value as LogLevel | 'all')}
          >
            <MenuItem value="all">همه</MenuItem>
            <MenuItem value="info">عادی</MenuItem>
            <MenuItem value="warning">هشدار</MenuItem>
            <MenuItem value="error">خطا</MenuItem>
            <MenuItem value="critical">بحرانی</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>نوع فعالیت</InputLabel>
          <Select
            value={selectedType}
            label="نوع فعالیت"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <MenuItem value="all">همه</MenuItem>
            <MenuItem value="login">ورود</MenuItem>
            <MenuItem value="logout">خروج</MenuItem>
            <MenuItem value="failed_login">ورود ناموفق</MenuItem>
            <MenuItem value="data_access">دسترسی به داده</MenuItem>
            <MenuItem value="data_modify">تغییر داده</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>زمان</TableCell>
              <TableCell>سطح</TableCell>
              <TableCell>نوع</TableCell>
              <TableCell>کاربر</TableCell>
              <TableCell>IP</TableCell>
              <TableCell>عملیات</TableCell>
              <TableCell>جزئیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>
                  {new Intl.DateTimeFormat('fa-IR', {
                    dateStyle: 'medium',
                    timeStyle: 'medium',
                  }).format(new Date(log.timestamp))}
                </TableCell>
                <TableCell>
                  <Chip
                    label={log.level}
                    color={levelColors[log.level]}
                    size="small"
                  />
                </TableCell>
                <TableCell>{log.type}</TableCell>
                <TableCell>{log.userName || '-'}</TableCell>
                <TableCell>{log.ipAddress}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={() => handleViewDetails(log)}
                  >
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>جزئیات لاگ</DialogTitle>
        <DialogContent>
          {selectedLog && (
            <Box sx={{ mt: 2 }}>
              <pre
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: '1rem',
                  borderRadius: '4px',
                  overflow: 'auto',
                }}
              >
                {JSON.stringify(selectedLog.details, null, 2)}
              </pre>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>بستن</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};