export class DocumentService {
    async uploadDocument(file: File): Promise<string> {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
      });
  
      return response.json();
    }
  
    async getDocuments(): Promise<any[]> {
      const response = await fetch('/api/documents');
      return response.json();
    }
  
    async deleteDocument(id: string): Promise<void> {
      await fetch(`/api/documents/${id}`, {
        method: 'DELETE',
      });
    }
  }
  