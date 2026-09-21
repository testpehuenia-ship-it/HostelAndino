import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inicialización automática de Vercel Web Analytics y Speed Insights
inject();
injectSpeedInsights();
