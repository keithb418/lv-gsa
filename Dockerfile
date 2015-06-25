FROM ubuntu:14.10

MAINTAINER Stephen Wright (clurect)

#basic
RUN apt-get install -y --no-install-recommends \
	software-properties-common 
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update && apt-get install -y \
	curl git-core wget unzip \
	ca-certificates 
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java8-installer \
	build-essential

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV CATALINA_HOME /apache-tomcat-8.0.23
ENV PATH $CATALINA_HOME/bin:$PATH
RUN wget http://apache.mirrors.ionfish.org/tomcat/tomcat-8/v8.0.23/bin/apache-tomcat-8.0.23.zip
RUN unzip apache-tomcat-8.0.23.zip
COPY docker-conf/tomcat-users.xml $CATALINA_HOME/conf/

EXPOSE 8080

RUN chmod +x /$CATALINA_HOME/bin/*.sh

CMD ["catalina.sh","run"]