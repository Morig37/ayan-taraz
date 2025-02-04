import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQ = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>نحوه رزرو مشاوره چگونه است؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            از طریق بخش رزرو مشاوره می‌توانید زمان مورد نظر خود را انتخاب کنید.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>روش‌های پرداخت چیست؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            پرداخت از طریق درگاه بانکی و کارت به کارت امکان‌پذیر است.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
