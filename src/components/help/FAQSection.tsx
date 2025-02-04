import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQSection = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>هزینه مشاوره چقدر است؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هزینه مشاوره بر اساس نوع خدمات از ۲۰۰ هزار تومان شروع می‌شود.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>چگونه می‌توانم زمان مشاوره را تغییر دهم؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            از طریق پنل کاربری می‌توانید تا ۲۴ ساعت قبل از مشاوره، زمان را تغییر دهید.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
