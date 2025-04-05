interface DeveloperDocsProps {
  title: string;
  description: string;
}

export default function DeveloperDocs({ title, description }: DeveloperDocsProps) {
  return (
    <div className="developer-docs">
      <div className="code-box">
        <div className="code-header">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
