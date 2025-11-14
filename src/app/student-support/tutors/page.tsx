import { TutorList } from '@/components/tutor-list';

export default function TutorsPage() {
  return (
    <main className="container max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Find <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Local Tutors</span></h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Get personalized help from experienced tutors in your area.
        </p>
      </div>
      <TutorList />
    </main>
  );
}

    