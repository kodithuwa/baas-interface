import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import './App.css';

type IconName = 'dashboard' | 'assistant' | 'clients' | 'platform' | 'users' | 'conversations' | 'question' | 'panel' | 'plus' | 'signout' | 'close';
type Assistant = { name: string; client: string; conversations: number; status: 'Live' | 'Draft' };

function Icon({ name, className = '' }: { name: IconName; className?: string }) {
    const common = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, strokeWidth: 1.8 };
    const paths: Record<IconName, ReactNode> = {
        dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
        assistant: <><path d="M9 7V4m6 3V4M7 8h10a3 3 0 0 1 3 3v7H4v-7a3 3 0 0 1 3-3Z" /><path d="M8 12h.01M16 12h.01M9 16h6" /><path d="M2 12v4m20-4v4" /></>,
        clients: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
        platform: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
        users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M19 8v6m3-3h-6" /></>,
        conversations: <><path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 3v-8.5A7.5 7.5 0 0 1 10.5 6H13" /><path d="M14 3h7v7h-7z" /><path d="m14 10-3 3" /></>,
        question: <><path d="M4 4h16v13H8l-4 4V4Z" /></>,
        panel: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /></>,
        plus: <><path d="M12 5v14M5 12h14" /></>,
        signout: <><path d="M10 17l5-5-5-5M15 12H3" /><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" /></>,
        close: <><path d="m18 6-12 12M6 6l12 12" /></>,
    };
    return <svg className={`icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name]}</svg>;
}

const initialAssistants: Assistant[] = [
    { name: 'abb_bot', client: '—', conversations: 0, status: 'Live' },
    { name: 'sss', client: '—', conversations: 1, status: 'Live' },
];

function Modal({ title, children, onClose, className = '' }: { title: string; children: ReactNode; onClose: () => void; className?: string }) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (!dialog.open) dialog.showModal();
    }, []);

    return (
        <dialog ref={dialogRef} className={`dashboard-dialog ${className}`} aria-labelledby="dialog-title" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
            <div className="dialog-heading"><h2 id="dialog-title">{title}</h2><button className="icon-button dialog-close" type="button" onClick={onClose} aria-label="Close dialog"><Icon name="close" /></button></div>
            {children}
        </dialog>
    );
}

function Sidebar({ collapsed, activeSection, onNavigate, onUnavailable }: { collapsed: boolean; activeSection: string; onNavigate: (target: string) => void; onUnavailable: (label: string) => void }) {
    return (
        <aside className={`sidebar${collapsed ? ' is-collapsed' : ''}`} id="application-sidebar" aria-label="Application sidebar">
            <div className="brand"><span className="brand-mark"><Icon name="assistant" /></span><span className="brand-name">Assistly</span></div>
            <nav className="side-nav" aria-label="Main navigation">
                <p className="nav-group-title">Workspace</p>
                <button className={`nav-item${activeSection === 'dashboard-main' ? ' is-active' : ''}`} type="button" aria-label="Dashboard" aria-current={activeSection === 'dashboard-main' ? 'page' : undefined} title="Dashboard" onClick={() => onNavigate('dashboard-main')}><Icon name="dashboard" /><span>Dashboard</span></button>
                <button className={`nav-item${activeSection === 'assistants-table' ? ' is-active' : ''}`} type="button" aria-label="Assistants" aria-current={activeSection === 'assistants-table' ? 'location' : undefined} title="Assistants" onClick={() => onNavigate('assistants-table')}><Icon name="assistant" /><span>Assistants</span></button>
                <button className={`nav-item${activeSection === 'clients-metric' ? ' is-active' : ''}`} type="button" aria-label="Clients" aria-current={activeSection === 'clients-metric' ? 'location' : undefined} title="Clients" onClick={() => onNavigate('clients-metric')}><Icon name="clients" /><span>Clients</span></button>
                <p className="nav-group-title platform-title">Platform</p>
                <button className="nav-item" type="button" onClick={() => onUnavailable('Platform overview')}><Icon name="platform" /><span>Platform overview</span></button>
                <button className="nav-item" type="button" onClick={() => onUnavailable('User management')}><Icon name="users" /><span>User management</span></button>
            </nav>
            <div className="account-area"><span>kodithuwa@gmail.com</span><button className="signout" type="button" onClick={() => onUnavailable('Sign out')}><Icon name="signout" /><span>Sign out</span></button></div>
        </aside>
    );
}

function MetricCard({ label, value, icon, id }: { label: string; value: number; icon: IconName; id?: string }) {
    return <article className="metric-card" id={id}><span className="metric-icon"><Icon name={icon} /></span><p>{label}</p><strong>{value}</strong></article>;
}

function AssistantsTable({ assistants, onViewAll }: { assistants: Assistant[]; onViewAll: () => void }) {
    return (
        <section className="assistants-card" id="assistants-table" aria-labelledby="assistants-title">
            <div className="table-heading"><h2 id="assistants-title">Assistants</h2><button className="text-action" type="button" onClick={onViewAll}>View all</button></div>
            <div className="table-scroll" role="region" aria-label="Assistants table" tabIndex={0}><table>
                <caption className="visually-hidden">Assistant names, clients, conversation counts, and status</caption>
                <thead><tr><th scope="col">Name</th><th scope="col">Client</th><th scope="col">Conversations</th><th scope="col">Status</th></tr></thead>
                <tbody>{assistants.slice(0, 2).map(row => <tr key={row.name}><td>{row.name}</td><td>{row.client}</td><td>{row.conversations}</td><td><span className={`status-badge${row.status === 'Draft' ? ' is-draft' : ''}`}>{row.status}</span></td></tr>)}</tbody>
            </table></div>
        </section>
    );
}

function App() {
    const [assistants, setAssistants] = useState(initialAssistants);
    const [dialog, setDialog] = useState<'create' | 'all' | null>(null);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [notice, setNotice] = useState('');
    const [assistantName, setAssistantName] = useState('');
    const [formError, setFormError] = useState('');
    const [activeSection, setActiveSection] = useState('dashboard-main');

    useEffect(() => {
        if (!notice) return;
        const timeout = window.setTimeout(() => setNotice(''), 3500);
        return () => window.clearTimeout(timeout);
    }, [notice]);

    const navigateTo = (target: string) => {
        setActiveSection(target);
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const createAssistant = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = assistantName.trim();
        if (!name) return;
        if (assistants.some(assistant => assistant.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
            setFormError('An assistant with that name already exists.');
            return;
        }
        setAssistants(current => [{ name, client: '—', conversations: 0, status: 'Draft' }, ...current]);
        setAssistantName('');
        setFormError('');
        setDialog(null);
        navigateTo('assistants-table');
    };

    return (
        <div className={`dashboard-shell${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
            <a className="skip-link" href="#dashboard-main">Skip to dashboard content</a>
            <Sidebar collapsed={sidebarCollapsed} activeSection={activeSection} onNavigate={navigateTo} onUnavailable={label => setNotice(`${label} is not available in this dashboard preview.`)} />
            <div className="workspace">
                <header className="topbar">
                    <button className="icon-button panel-toggle" type="button" aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!sidebarCollapsed} aria-controls="application-sidebar" onClick={() => setSidebarCollapsed(value => !value)}><Icon name="panel" /></button>
                    <button className="topbar-action" type="button" onClick={() => setDialog('create')}><Icon name="plus" />New assistant</button>
                </header>
                <main className="dashboard-main" id="dashboard-main">
                    <div className="dashboard-content">
                        <div className="page-heading"><h1>Dashboard</h1><p>Your agency at a glance — last 14 days.</p></div>
                        <section className="metrics-grid" aria-label="Dashboard metrics">
                            <MetricCard label="Assistants" value={assistants.length} icon="assistant" />
                            <MetricCard label="Clients" value={0} icon="clients" id="clients-metric" />
                            <MetricCard label="Conversations" value={1} icon="conversations" />
                            <MetricCard label="Questions asked" value={3} icon="question" />
                        </section>
                        <div className="insights-grid">
                            <section className="chart-card" aria-labelledby="questions-title"><h2 id="questions-title">Questions per day</h2><div className="chart-dates" role="img" aria-label="Questions per day chart for 14 days, dated 22 through 4. Data values are not displayed."><div className="chart-marks" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <span key={i} />)}</div><div className="date-labels">{['22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2', '3', '4'].map((date, i) => <span key={`${date}-${i}`}>{date}</span>)}</div></div></section>
                            <section className="create-card" aria-labelledby="create-title"><h2 id="create-title">Launch a new client assistant</h2><p>Upload documents, add website pages and get an embed code in minutes.</p><button className="create-action" type="button" onClick={() => setDialog('create')}>Create assistant</button></section>
                        </div>
                        <AssistantsTable assistants={assistants} onViewAll={() => setDialog('all')} />
                    </div>
                </main>
            </div>
            {dialog === 'create' && <Modal title="Create assistant" onClose={() => { setDialog(null); setFormError(''); }}>
                <form className="assistant-form" onSubmit={createAssistant}>
                    <p>Give your assistant a name. It will be added as a draft in this preview.</p>
                    <label htmlFor="assistant-name">Assistant name</label>
                    <input id="assistant-name" name="assistantName" autoFocus required maxLength={60} value={assistantName} aria-describedby={formError ? 'assistant-name-error' : undefined} onChange={event => { setAssistantName(event.target.value); setFormError(''); }} placeholder="e.g. support_bot" />
                    {formError && <p className="form-error" id="assistant-name-error" role="alert">{formError}</p>}
                    <div className="dialog-actions"><button className="secondary-action" type="button" onClick={() => setDialog(null)}>Cancel</button><button className="primary-action" type="submit">Create assistant</button></div>
                </form>
            </Modal>}
            {dialog === 'all' && <Modal title="All assistants" onClose={() => { setDialog(null); setFormError(''); }} className="all-assistants-dialog">
                <p className="dialog-description">{assistants.length} assistants in this dashboard preview.</p>
                <ul className="assistant-list">{assistants.map(assistant => <li key={assistant.name}><span><strong>{assistant.name}</strong><small>{assistant.client === '—' ? 'No client assigned' : assistant.client}</small></span><span className={`status-badge${assistant.status === 'Draft' ? ' is-draft' : ''}`}>{assistant.status}</span></li>)}</ul>
                <div className="dialog-actions"><button className="primary-action" type="button" onClick={() => setDialog('create')}>New assistant</button></div>
            </Modal>}
            {notice && <div className="notice" role="status">{notice}</div>}
        </div>
    );
}

export default App;
