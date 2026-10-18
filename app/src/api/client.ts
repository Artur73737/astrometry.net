import type { SolveJob, SolveOptions } from '../types';
export class ApiClient {
  constructor(private baseUrl: string, private apiKey = '') { this.baseUrl = baseUrl.replace(/\/$/, ''); }
  private async request(path: string, init?: RequestInit) { const res = await fetch(`${this.baseUrl}${path}`, init); if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`); return res.json(); }
  async upload(file: File, options: SolveOptions = {}) { const body = new FormData(); body.append('file', file); body.append('request-json', JSON.stringify({ apikey: this.apiKey, ...options })); return this.request('/upload', { method: 'POST', body }); }
  async submission(id: string) { return this.request(`/submissions/${id}`); }
}
