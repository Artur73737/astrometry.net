export type JobState = 'idle' | 'uploading' | 'queued' | 'solving' | 'success' | 'failure';
export interface SolveJob { id: string; name: string; state: JobState; progress: number; createdAt: string; ra?: string; dec?: string; pixelScale?: string; message?: string; }
export interface SolveOptions { scaleUnits?: string; scaleLower?: number; scaleUpper?: number; downsampleFactor?: number; centerRa?: number; centerDec?: number; radius?: number; }
