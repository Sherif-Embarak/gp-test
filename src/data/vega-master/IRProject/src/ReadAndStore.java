




import java.io.File;
import java.io.FileNotFoundException;


import java.util.*;

import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

/**
 * Created by Sherif on 11/27/2015.
 */



public class ReadAndStore {



    public static String[] Read_file(String path) throws FileNotFoundException {
        String token="";
        Scanner infile=new Scanner(new File(path)).useDelimiter(",\\s*");
        List<String> temp=new ArrayList<String>();


        while(infile.hasNext()) {
            token = infile.next();
            temp.add(token);
        }

        infile.close();

        String[] tempArray=temp.toArray(new String[0]);

        return tempArray;

    }

//    public static String check_op(String [] lsStr)
//    {
//        String query="";
//        for(int o=0;o<lsStr.length;o++)
//        {
//            if(lsStr[o].equals("AND"))
//            {
//                query+="&";
//            }
//            else if(lsStr[o].equals("OR"))
//            {
//                query+="|";
//            }
//            else if(lsStr[o].equals("NOT"))
//            {
//                query+="~";
//            }
//            else if(lsStr[o].equals("("))
//            {
//                query+="(";
//            }
//            else if(lsStr[o].equals(")"))
//            {
//                query+=")";
//            }
//
//        }
//        return query;
//    }

    public static String check_op_s(String lsStr)
    {
        String query="";
            if(lsStr.equals("AND"))
            {
                query+="&";
            }
            else if(lsStr.equals("OR"))
            {
                query+="|";
            }
            else if(lsStr.equals("NOT"))
            {
                query+="~";
            }
            else if(lsStr.equals("("))
            {
                query+="(";
            }
            else if(lsStr.equals(")"))
            {
                query+=")";
            }
        return query;
    }

    public static Object check(String str)
    {
        //System.out.println(str);
        String s="";
        for(int i=0;i<str.length();i++)
        {
            if(str.charAt(i)!='~'){
            s+=str.charAt(i);}
            else if(str.charAt(i)=='~' && str.charAt(i+1)=='1')
            {s+="0";i++;}
            else
            {s+="1";i++;}
        }
        ScriptEngineManager mgr = new ScriptEngineManager();
        ScriptEngine engine = mgr.getEngineByName("JavaScript");
        try {
            //System.out.println(s);
           return engine.eval(s);
        } catch (ScriptException e) {
            e.printStackTrace();
        }
        return 0;
    }

    public static int search(List<MyPair<Integer,String>> ls, String str)
    {
        for(int i=0;i<ls.size();i++)
        {
            //System.out.println(ls.get(i).getR().toLowerCase()+ " "+i+" in");
            if(ls.get(i).getR().toLowerCase().equals(str))
                return i;
        }
        return -1;
    }

    public static boolean is_op(String s)
    {
        if(s.equals("AND") || s.equals("OR") || s.equals("NOT") || s.equals(")") || s.equals("(") )
        {
            return true;
        }
        else
            return false;
    }
    public static void main(String[] args) throws FileNotFoundException {

        String path;
        int num;
        System.out.println("Welcome !\n please enter number of files : ");
        List<String []> ls=new ArrayList<String []>();
        Scanner cin=new Scanner(System.in);
        num =cin.nextInt();
        List<String> filename=new ArrayList<String>();
        System.out.print("enter files path\n");
        for(int j=0;j<num;j++) {
            path = cin.next();
            File f=new File(path);
            ls.add(Read_file(path));
            filename.add(f.getName().substring(0,f.getName().toString().lastIndexOf(".")));
        }

        String [] non={"and","or","the","a","an","of","on","in","at","s","are","(",")"};

        List<List<MyPair<Integer,String>>> token_from_file=new ArrayList<List<MyPair<Integer,String>>>();
        for(int i=0;i<ls.size();i++)
        {
            List<MyPair<Integer,String>> s=new ArrayList<MyPair<Integer,String>>();

            for(int j=0;j<ls.get(i).length;j++)
            {
                //System.out.println(ls.get(i)[j].length());
                String str="";
                int ind=1;
                int prev=1;

                for(int k=0;k<ls.get(i)[j].length();k++)
                {
                    char c=ls.get(i)[j].charAt(k);
                    int n=(int)c;
                    MyPair<Integer,String>p=new MyPair<Integer,String>();
                    if((n>96 && n<123) || (n>64 && n<91) || n==45 || (n>33 && n<126))
                    {
                        str+=c;
                    }
                    else
                    {
                        //System.out.println(str+"1");
                        for(int h=0;h<10;h++)
                        {
//                            if(str.equals(non[h]))
//                            {str="";}
                        }
                        if(str!=""){p.setL(ind);p.setR(str);s.add(ind-1, p);str="";ind++;}
                    }
                }
            }
            token_from_file.add(i, s);
        }
        System.out.print("enter your query : \n");
       Scanner s=new Scanner(System.in);
        String input=s.nextLine();

        String [] lsStr=input.split("\\s+");

        for(int i=0;i<token_from_file.size();i++)
        {
            for (int j=0;j<token_from_file.get(i).size();j++)
            {
                //System.out.println(token_from_file.get(i).get(j)+" "+"from file " +filename.get(i));
            }
        }

        boolean f=false;
//            for(int i=0;i<token_from_file.size();i++)
//            {
//            String q="";
//            System.out.print(filename.get(i) + " : ");
//            for(int j=0;j<lsStr.length;j++)
//            {
//               if(is_op(lsStr[j]))
//               {
//                   q+=check_op_s(lsStr[j]);
//                }
//               else
//              {
//                int re=search(token_from_file.get(i),lsStr[j].toLowerCase());
//                    if(re!=-1)
//                    {
//                        System.out.print(lsStr[j].toString()+" "+(re+1)+" ");
//                    }
//                    else
//                    {
//                        q+="0";
//                    }
//                }
//            }
//            System.out.println(q);
//            int k=(Integer)check(q);
//            if(k!=0)
//            {System.out.println();f=true;}
//        }
        List<String>results=new ArrayList<String>();
        TreeSet<String>ts=new TreeSet<String>();
        for(int i=0;i<lsStr.length;i++)
        {
            System.out.print("("+lsStr[i]+ ") ");

            for(int j=0;j<token_from_file.size();j++) {
                int index = search(token_from_file.get(j), lsStr[i].toLowerCase());

                if (index != -1) {
                    System.out.print(filename.get(j) + ":" + (index + 1) + " , ");
                    ts.add(filename.get(j));
                    results.add(filename.get(j));
                }
            }
            System.out.print("\n");

        }
        for (String res : ts)
        {
            int x= Collections.frequency(results,res);
            if(x==lsStr.length)
                System.out.println(res + " is the matched document.");
        }

    }


}


